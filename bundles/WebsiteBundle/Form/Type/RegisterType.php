<?php

namespace WebsiteBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegisterType extends AbstractType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
            ->add(
                'username',
                TextType::class,
                [
                    'label' => 'Username',
                    'required' => true,
                ]
            )
            ->add(
                'password',
                PasswordType::class,
                [
                    'label' => 'Passwort',
                    'required' => true,
                ]
            )
            ->add(
                'submit',
                SubmitType::class,
                [
                    'label' => 'Registrieren',
                ]
            );
    }
}
