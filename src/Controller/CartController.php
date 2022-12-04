<?php

namespace App\Controller;

// use App\Repository\ManifestationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    #[Route("/cart", name: "app_cart")]
    public function cart(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render(
            'cart/cart.html.twig',
            []
        );
    }

    #[Route("/cart/checkout", name: "app_cart_checkout")]
    public function cartCheckout(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render(
            'cart/cart_checkout.html.twig',
            []
        );
    }

    #[Route("/cart/confirm", name: "app_cart_confirm")]
    public function cartConfirm(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render(
            'cart/cart_confirm.html.twig',
            []
        );
    }
}
