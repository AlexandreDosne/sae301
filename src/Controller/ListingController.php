<?php

namespace App\Controller;

use App\Repository\ManifestationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ListingController extends AbstractController
{
    private const MAX_DESC_LEN = 128;

    #[Route("/listing", name: "app_listing")]
    public function listing(ManifestationRepository $repo): \Symfony\Component\HttpFoundation\Response
    {
        $manifestations = $repo->findAll();

        // Formatting
        for ($i = 0; $i < count($manifestations); $i++)
        {
            // Shorten descriptions if their length exceed MAX_DESC_LEN
            $desc = $manifestations[$i]->getDescription();

            if (mb_strlen($desc) >= self::MAX_DESC_LEN - 3)
            {
                $desc = mb_substr($desc, 0, self::MAX_DESC_LEN - 3) . '...';
                $manifestations[$i]->setDescription($desc);
            }
        }

        return $this->render(
            'products/listing.html.twig',
            ['manifestations' => $manifestations]
        );
    }

    // Cette route permet de voir une manif en détail
    #[Route("/listing/{id}", name: "app_listing_details")]
    public function listingDetails(int $id, ManifestationRepository $repo): \Symfony\Component\HttpFoundation\Response
    {
        $manif = $repo->find($id);

        // Si l'id n'existe pas, on redirige vers le listing
        if (is_null($manif))
            return $this->redirectToRoute('app_listing');

        return $this->render(
            'products/listing_details.html.twig',
            ['manif' => $manif]
        );
    }
}
