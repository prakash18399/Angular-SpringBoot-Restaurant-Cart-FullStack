package com.mindtree.restaurant.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.restaurant.entity.Cart;
import com.mindtree.restaurant.entity.Customer;
import com.mindtree.restaurant.entity.Item;
import com.mindtree.restaurant.repository.CartRepository;
import com.mindtree.restaurant.repository.CustomerRepository;
import com.mindtree.restaurant.repository.ItemRepository;

@Service
public class CartService {

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private ItemRepository itemRepository;

	@Autowired
	private CustomerRepository customerRepository;

	public Cart addCartItem(long cid, long pid, long qty) {

		long quantity = qty;
		Item item = itemRepository.findById(pid).get();
		Customer customer = customerRepository.findById(cid).get();

		Cart cartItem = new Cart();
		cartItem.setCustomer(customer);
		cartItem.setQuantity(quantity);
		cartItem.setItem(item);
		return cartRepository.save(cartItem);
	}

	public List<Cart> getAllCartItemsByACustomer(long cid) {
		Customer customer = customerRepository.findById(cid).get();
		return cartRepository.findByCustomer(customer);
	}

	public Map<String, Boolean> deleteById(long id) {
		cartRepository.deleteById(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
