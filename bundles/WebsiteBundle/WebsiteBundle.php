<?php

namespace WebsiteBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class WebsiteBundle extends AbstractPimcoreBundle
{
    public function getJsPaths()
    {
        return [
            '/bundles/website/js/pimcore/startup.js'
        ];
    }
}