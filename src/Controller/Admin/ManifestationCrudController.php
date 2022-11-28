<?php

namespace App\Controller\Admin;

use App\Entity\Manifestation;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ManifestationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Manifestation::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
