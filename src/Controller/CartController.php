<?php

namespace App\Controller;

use App\Entity\Achat;
use App\Repository\ManifestationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\UserInterface;

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
    public function cartConfirm(Request $request, ManagerRegistry $doctrine, UserInterface $user, ManifestationRepository $mrepo): \Symfony\Component\HttpFoundation\Response
    {
        $adresse = $request->request->get('adresse');

        // Ajouter nouvel achat
        $entityManager = $doctrine->getManager();
        $achat = new Achat();
        $achat->setDate(new \DateTime());
        $achat->setMontant($request->request->get('cartprice'));
        $achat->setUser($user);

        $content = explode(';', $request->request->get('cartcontent'));
        $contentFinal = '';

        for ($i = 0; $i < count($content) - 1; $i++)
        {
            $line = explode('x', $content[$i]);
            $manif = $mrepo->find($line[0]);

            if (!empty($manif))
                $contentFinal .= $manif->getTitre() . ' x' . $line[1] . ';';
        }

        $achat->setContent($contentFinal);

        $entityManager->persist($achat);
        $entityManager->flush();

        return $this->render(
            'cart/cart_confirm.html.twig',
            ['adresse' => $adresse]
        );
    }
}
