<?php

namespace WebsiteBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Pimcore\Model\DataObject;
// use App\Model\DataObject as AppModel;

/**
 * @Route("/shop", name="shop_")
 *
 */
class ShopController extends FrontendController {
    /**
     * @Route("/", name="home")
     *
     */
    public function homeAction(Request $request) {
        $cars = new DataObject\Car\Listing();
        $cars->setCondition("isFeatured LIKE 1");

        // dd(AppModel\User::getById(18)->getRoles());

        return $this->render('@Website/content/shop.html.twig', [
            "cars" => $cars
        ]);
    }

    /**
     * @Route("/car/{id}", name="car_detail")
     *
     */
    public function detailAction(Request $request, int $id) {
        $car = DataObject\Car::getById($id);
        return $this->render('@Website/content/car-detail.html.twig', [
            "car" => $car
        ]);
    }
}
