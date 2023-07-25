package com.dndproject.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="race")
public class Race {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="size")
	private String size;
	
	@Column(name="lifespan")
	private int lifespan;
	
	@Column(name="movementSpeed")
	private int speed;
	
	@Column(name="traits")
	private String traits;
}
