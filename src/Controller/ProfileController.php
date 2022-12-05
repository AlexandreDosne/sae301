<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class ProfileController extends AbstractController
{
    #[Route("/profile", name: "app_profile")]
    public function profile(Security $security): \Symfony\Component\HttpFoundation\Response
    {
        $user = $security->getUser();

        return $this->render(
            'user/profile.html.twig',
            ['user' => $user]
        );
    }
}
