<?php

namespace WebsiteBundle\Twig\Extension;

use Pimcore\Model\DataObject\Accommodation;
use Symfony\Component\Intl\Countries;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ConfigExtension extends AbstractExtension
{
    private $translator;
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('getEnvValue', [$this, 'getEnvValue']),
        ];
    }

    public function getEnvValue($value)
    {
        if (key_exists($value, $_ENV)) {
            return $_ENV[$value];
        }

        return false;
    }
}

