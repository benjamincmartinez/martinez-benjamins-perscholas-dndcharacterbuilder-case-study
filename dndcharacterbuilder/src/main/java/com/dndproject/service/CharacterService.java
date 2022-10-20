package com.dndproject.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dndproject.models.DndCharacter;
import com.dndproject.repositories.CharacterRepository;

@Service
public class CharacterService {
	@Autowired
	private CharacterRepository characterRepository;
	
	public void addCharacter(DndCharacter character) {
		characterRepository.save(character);
	}
	
	public List<DndCharacter> getAllCharacters() {
		List<DndCharacter> dndcharacters = new ArrayList<DndCharacter>();
		characterRepository.findAll().forEach(dndcharacters::add);
		return dndcharacters;
	}
}
