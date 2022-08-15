<?php

namespace WebsiteBundle\EventListener;

use Pimcore\Session\SessionConfiguratorInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\Attribute\AttributeBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class SessionBagListener implements EventSubscriberInterface {
    public static function getSubscribedEvents(): array {
        return [
            //run after Symfony\Component\HttpKernel\EventListener\SessionListener
            KernelEvents::REQUEST => ['onKernelRequest', 127],
        ];
    }

    /**
     * @param RequestEvent $event
     */
    public function onKernelRequest(RequestEvent $event) {
        if (!$event->isMainRequest()) {
            return;
        }

        $session = $event->getRequest()->getSession();
        $bag = new AttributeBag('_session_cart');
        $bag->setName('session_cart');
        $bag->set('total', 0);

        $session->registerBag($bag);
    }
}
