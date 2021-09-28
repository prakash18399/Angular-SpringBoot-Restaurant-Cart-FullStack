package com.mindtree.restaurant.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.restaurant.entity.Customer;
import com.mindtree.restaurant.exception.CustomerException;
import com.mindtree.restaurant.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@GetMapping("/customers")
	public List<Customer> findAllCustomers() {
		return customerService.findAllCustomers();
	}

	@GetMapping("/customers/{id}")
	public Optional<Customer> findById(@PathVariable long id) {
		return customerService.findById(id);
	}

	@PostMapping("/register")
	public Customer registerUser(@RequestBody Customer customer) {
		String username = customer.getUsername();
		Customer savedCustomer = null;
		if (username != null && username != "") {
			Customer userObj = customerService.findByUsername(username);
			if (userObj != null) {
				throw new CustomerException("Customer already exists");
			}
		}
		savedCustomer = customerService.registerCustomer(customer);
		return savedCustomer;
	}

	@PostMapping("/login")
	public Customer login(@RequestBody Customer user) {
		String username = user.getUsername();
		String password = user.getPassword();
		Customer loguser = customerService.findByUsernameAndPassword(username, password);
		if (loguser == null) {
			throw new CustomerException("invalid credentials");
		}
		;
		return loguser;
	}

}
