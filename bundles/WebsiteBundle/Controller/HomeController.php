<?php

namespace WebsiteBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends FrontendController {
    public function homeAction(Request $request) {
        return $this->render('@Website/content/home.html.twig');
    }
}
