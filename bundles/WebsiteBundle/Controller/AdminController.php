<?php

namespace WebsiteBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/site-admin", name="admin_")
 *
 */
class AdminController extends FrontendController {
    /**
     * @Route("/", name="home")
     *
     */
    public function adminAction(Request $request) {
        return $this->render('@Website/content/home.html.twig');
    }
}
