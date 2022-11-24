<?php

namespace App\Controller;

use App\Repository\ManifestationRepository;
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

    #[Route("/cart/add/{id}", name: "app_cart_add")]
    public function cartAdd(int $id, ManifestationRepository $repo): \Symfony\Component\HttpFoundation\Response
    {
        // TODO: Add item to cart
        return $this->redirectToRoute('app_cart');
    }
}
