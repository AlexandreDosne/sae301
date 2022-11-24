<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ListingController extends AbstractController
{
    #[Route("/listing", name: "app_listing")]
    public function listing(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render(
            'products/listing.html.twig',
            []
        );
    }
}