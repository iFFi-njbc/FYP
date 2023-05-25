package com.FYP.AIA.exceptions;

public class CustomerNotFoundException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CustomerNotFoundException(Long id) {
        super("Could not find customer with id: " + id);
    }
	
	public CustomerNotFoundException(String name)
	{
		super("Could not find customer with name: " + name);
	}
}