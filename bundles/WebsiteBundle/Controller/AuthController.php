<?php

namespace WebsiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Pimcore\Model\DataObject;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use WebsiteBundle\Form\Type\RegisterType;

/**
 * @Route("/auth", name="auth_")
 *
 */
class AuthController extends AbstractController {

    /**
     * @Route("/register", name="register")
     *
     */
    public function registerAction(Request $request, UserPasswordHasherInterface $passwordHasher) {
        $user = new DataObject\User();

        $form = $this->createForm(RegisterType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setKey(\Pimcore\Model\Element\Service::getValidKey(uniqid("User"), "object"));
            $user->setParentId(6);
            $user->save();

            return $this->redirect("/");
        }


        return $this->render('@Website/content/auth-form.html.twig', [
            'headline' => 'Registrieren',
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/login", name="login")
     *
     */
    public function loginAction(AuthenticationUtils $authenticationUtils) {
        $error = $authenticationUtils->getLastAuthenticationError();

        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('@Website/content/login-form.html.twig', [
            'last_username' => $lastUsername,
            'error'         => $error,
        ]);
    }
}
