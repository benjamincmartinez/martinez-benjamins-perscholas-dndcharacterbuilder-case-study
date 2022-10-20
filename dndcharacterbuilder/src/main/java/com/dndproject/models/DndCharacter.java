package com.dndproject.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dndcharacter")
public class DndCharacter {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="level")
	private String lvl;
	
	@Column(name="strength")
	private int str;
	
	@Column(name="dexterity")
	private int dex;
	
	@Column(name="constitution")
	private int con;
	
	@Column(name="intelligence")
	private int intell;
	
	@Column(name="wisdom")
	private int wis;
	
	@Column(name="charisma")
	private int cha;

	public DndCharacter() {}

	public DndCharacter(String name, String lvl, int str, int dex, int con, int intell, int wis, int cha) {
		this.name = name;
		this.lvl = lvl;
		this.str = str;
		this.dex = dex;
		this.con = con;
		this.intell = intell;
		this.wis = wis;
		this.cha = cha;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLvl() {
		return lvl;
	}

	public void setLvl(String lvl) {
		this.lvl = lvl;
	}

	public int getStr() {
		return str;
	}

	public void setStr(int str) {
		this.str = str;
	}

	public int getDex() {
		return dex;
	}

	public void setDex(int dex) {
		this.dex = dex;
	}

	public int getCon() {
		return con;
	}

	public void setCon(int con) {
		this.con = con;
	}

	public int getIntell() {
		return intell;
	}

	public void setIntell(int intell) {
		this.intell = intell;
	}

	public int getWis() {
		return wis;
	}

	public void setWis(int wis) {
		this.wis = wis;
	}

	public int getCha() {
		return cha;
	}

	public void setCha(int cha) {
		this.cha = cha;
	}

	@Override
	public String toString() {
		return "DndCharacter [name=" + name + ", lvl=" + lvl + ", str=" + str + ", dex=" + dex + ", con=" + con
				+ ", intell=" + intell + ", wis=" + wis + ", cha=" + cha + "]";
	}
	
}
