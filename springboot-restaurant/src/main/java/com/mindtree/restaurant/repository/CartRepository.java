package com.mindtree.restaurant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.restaurant.entity.Cart;
import com.mindtree.restaurant.entity.Customer;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

	List<Cart> findByCustomer(Customer customer);

}
