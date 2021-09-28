package com.mindtree.restaurant.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.restaurant.entity.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long>{

	Customer findByUsername(String username);

	Customer findByUsernameAndPassword(String username, String password);

}
