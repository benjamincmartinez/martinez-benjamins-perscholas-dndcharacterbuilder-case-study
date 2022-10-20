package com.dndproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dndproject.models.DndCharacter;
import com.dndproject.service.CharacterService;

@Controller
@RequestMapping("/dnd")
public class CharacterController {
	@Autowired
	private CharacterService characterService;
	
	@GetMapping("/build")
	public String characterBuilder(Model model) {
		model.addAttribute("dndcharacter", new DndCharacter());
		return "character-sheet";
	}
	@PostMapping("/build/save")
	@ResponseBody
	public List<DndCharacter> pushCharacter(@ModelAttribute(value="dndcharacter") DndCharacter dndcharacter){
		
		characterService.addCharacter(dndcharacter);
		return characterService.getAllCharacters();
	}
}
