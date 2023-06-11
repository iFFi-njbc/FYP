package com.FYP.AIA.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.FYP.AIA.model.Product;
import com.FYP.AIA.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProduct(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid product ID: " + id));
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid product ID: " + id));

        product.setProductName(updatedProduct.getProductName());
        product.setShowSalePrice(updatedProduct.isShowSalePrice());
        product.setSalePrice(updatedProduct.getSalePrice());
        product.setShowPurchasePrice(updatedProduct.isShowPurchasePrice());
        product.setPurchasePrice(updatedProduct.getPurchasePrice());
        product.setProductCategory(updatedProduct.getProductCategory());

        return productRepository.save(product);
    }
    
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    
    public List<String> getproductnames() {
    	
 	   List<String> lst = productRepository.findDistinctproductName();
 	  
 	    	
 	    	return lst;
 	    }
    public  ResponseEntity<Map<String, Boolean>> deleteproduct(Long id) {
       productRepository.deleteById(id);
       Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
    }
}
