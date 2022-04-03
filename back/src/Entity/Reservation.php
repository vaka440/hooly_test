<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\DBAL\FetchMode;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Day::class, inversedBy: 'reservations')]
    #[ORM\JoinColumn(nullable: false)]
    private $day;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'reservations', fetch: "EAGER")]
    #[ORM\JoinColumn(nullable: false)]    
    private $user;

    #[ORM\ManyToOne(targetEntity: Location::class, inversedBy: 'reservations', fetch: "EAGER")]
    #[ORM\JoinColumn(nullable: false)]    
    private $location;

    #[ORM\ManyToOne(targetEntity: Society::class, inversedBy: 'reservations', fetch: "EAGER")]
    #[ORM\JoinColumn(nullable: false)]    
    private $society;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDay(): ?Day
    {
        return $this->day;
    }

    public function setDay(?Day $day): self
    {
        $this->day = $day;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getLocation(): ?Location
    {
        return $this->location;
    }

    public function setLocation(?Location $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getSociety(): ?Society
    {
        return $this->society;
    }

    public function setSociety(?Society $society): self
    {
        $this->society = $society;

        return $this;
    }
}
