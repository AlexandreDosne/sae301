<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

class ProfileController extends AbstractController
{
    #[Route("/profile", name: "app_profile")]
    public function profile(UserInterface $user): \Symfony\Component\HttpFoundation\Response
    {
        $achatList = $user->getAchats();

        return $this->render(
            'user/profile.html.twig',
            [
                'user' => $user,
                'achatList' => $achatList
            ]
        );
    }
}
