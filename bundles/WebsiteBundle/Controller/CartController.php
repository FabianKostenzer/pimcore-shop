<?php

namespace WebsiteBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Pimcore\Model\DataObject;

/**
 * @Route("/cart", name="cart_")
 *
 */
class CartController extends FrontendController {
    /**
     * @Route("/widget", name="widget")
     *
     */
    public function WidgetAction(Request $request) {
        $session = $request->getSession();

        /** @var AttributeBag $bag */
        $bag = $session->getBag('session_cart');

        return $this->render('@Website/components/Header/cart.html.twig', [
            "totalAmount" => $bag->get('total')
        ]);
    }

    /**
     * @Route("/add/{id}", name="add")
     *
     */
    public function addAction(Request $request, int $id) {
        $bag = $this->getCartBag($request);

        $currentAmount = $bag->get($id);
        if (!$currentAmount) {
            $bag->set($id, 1);
        } else {
            $bag->set($id, $currentAmount + 1);
        }

        $this->refreshTotal($bag);

        return $this->evaluateRedirect($request);
    }

    /**
     * @Route("/remove/{id}", name="remove")
     *
     */
    public function removeAction(Request $request, int $id) {
        $bag = $this->getCartBag($request);

        $currentAmount = $bag->get($id);
        if ($currentAmount <= 1) {
            $bag->remove($id);
        } else {
            $bag->set($id, $currentAmount - 1);
        }

        $this->refreshTotal($bag);

        return $this->evaluateRedirect($request);
    }

    /**
     * @Route("/summary", name="summary")
     *
     */
    public function summaryAction(Request $request) {
        $bag = $this->getCartBag($request);

        if ($bag->get('total') == 0) {
            return $this->redirectToRoute('shop_home');
        }

        $cars = [];
        $amounts = [];
        $totalPrice = 0;

        foreach ($bag->all() as $key => $value) {
            if ($key == "total") continue;

            $car = DataObject\Car::getById($key);
            array_push($cars, $car);

            array_push($amounts, $value);

            $totalPrice += $car->getPrice() * $value;
        }

        return $this->render('@Website/content/cart-summary.html.twig', [
            'cars' => $cars,
            'amounts' => $amounts,
            'totalPrice' => $totalPrice
        ]);
    }

    private function evaluateRedirect($request) {
        $referer = $request->headers->get('referer');

        $comesFromSummary = str_ends_with($referer, '/cart/summary');

        $bag = $this->getCartBag($request);
        $total = $bag->get('total');

        $isBagEmpty = !$total;

        if ($comesFromSummary && !$isBagEmpty) {
            return $this->redirectToRoute('cart_summary');
        } else {
            return $this->redirectToRoute('shop_home');
        }
    }

    private function getCartBag($request) {
        $session = $request->getSession();

        /** @var AttributeBag $bag */
        $bag = $session->getBag('session_cart');
        return $bag;
    }

    private function refreshTotal($bag) {
        $currentTotal = 0;

        foreach ($bag->all() as $key => $value) {
            if ($key == "total") continue;
            $currentTotal += $value;
        }

        $bag->set('total', $currentTotal);
    }
}
