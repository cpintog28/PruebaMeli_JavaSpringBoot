package backend.meli.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.meli.models.Color;

public interface ColorRepository extends JpaRepository<Color, Long> {

}
