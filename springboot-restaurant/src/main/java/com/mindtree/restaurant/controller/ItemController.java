package com.mindtree.restaurant.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.restaurant.entity.Item;
import com.mindtree.restaurant.service.ItemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@GetMapping("/items")
	public List<Item> getAllItems(HttpSession session) {
		
		return itemService.findAll();
	}
	
	@PostMapping("/items/add")
	public Item addItem(@RequestBody Item item) {
		return itemService.saveItem(item);
	}
	
	@PostMapping("items/update/{id}")
	public Item editItem(@PathVariable("id") long id, @RequestBody Item item) {
		return itemService.editItem(id,item);
	}
	
	@GetMapping("/items/{id}")
	public Item getItemById(@PathVariable("id") long id) {
		return itemService.getItemById(id);
	}
	
	@DeleteMapping("/items/delete/{id}")
	public void deleteItem(@PathVariable("id") long id) {
		itemService.deleteItem(id);
	}
	
	@GetMapping("/items/category/{category}")
	public List<Item> getItemsByCategory(@PathVariable("category") String category) {
		String lowerCategory = category.toLowerCase();
		return itemService.getItemsByCategory(lowerCategory);
	}
		
	
}
