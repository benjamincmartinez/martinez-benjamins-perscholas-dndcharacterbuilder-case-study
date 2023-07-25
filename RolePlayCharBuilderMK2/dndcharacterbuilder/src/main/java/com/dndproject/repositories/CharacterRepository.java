package com.dndproject.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dndproject.models.DndCharacter;

@Repository
public interface CharacterRepository extends JpaRepository<DndCharacter, Long>{
	List<DndCharacter> findByName(String name);
}
