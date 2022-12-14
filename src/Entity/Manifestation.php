<?php

namespace App\Entity;

use App\Repository\ManifestationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ManifestationRepository::class)]
class Manifestation
{
    private const AFFICHE_DIR = '/assets/img/affiches/';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\Column(length: 255)]
    private ?string $genre = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $casting = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $affiche = null;

    #[ORM\Column(length: 255)]
    private ?string $horaire = null;

    #[ORM\Column]
    private ?int $tarif = null;

    #[ORM\ManyToOne(inversedBy: 'manifestations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Lieu $lieu = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getGenre(): ?string
    {
        return ucfirst($this->genre);
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCasting(): ?string
    {
        if (empty($this->casting))
            return 'N/A';

        return $this->casting;
    }

    public function setCasting(string $casting): self
    {
        $this->casting = $casting;

        return $this;
    }

    public function getAffiche(): ?string
    {
        if (empty($this->affiche))
            return $this::AFFICHE_DIR . 'placeholder.jpg';

        return $this::AFFICHE_DIR . $this->affiche . '.jpg';
    }

    public function setAffiche(?string $affiche): self
    {
        $this->affiche = $affiche;

        return $this;
    }

    public function getHoraire(): ?string
    {
        return $this->horaire;
    }

    public function setHoraire(string $horaire): self
    {
        $this->horaire = $horaire;

        return $this;
    }

    public function getTarif(): ?int
    {
        return $this->tarif;
    }

    public function setTarif(int $tarif): self
    {
        $this->tarif = $tarif;

        return $this;
    }

    public function getLieu(): ?Lieu
    {
        return $this->lieu;
    }

    public function setLieu(?Lieu $lieu): self
    {
        $this->lieu = $lieu;

        return $this;
    }
}
