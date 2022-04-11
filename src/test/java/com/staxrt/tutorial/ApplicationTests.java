package com.staxrt.tutorial;

import com.staxrt.tutorial.model.Vehiculo;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationTests {

	@Autowired
	private TestRestTemplate restTemplate;

	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}

	@Test
	public void contextLoads() {
	}

	@Test
	public void testGetAllVehiculos() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/users",
				HttpMethod.GET, entity, String.class);

		Assert.assertNotNull(response.getBody());
	}

	@Test
	public void testGetVehiculoById() {
		Vehiculo user = restTemplate.getForObject(getRootUrl() + "/users/1", Vehiculo.class);
		System.out.println(user.getFirstName());
		Assert.assertNotNull(user);
	}

	@Test
	public void testCreateVehiculo() {
		Vehiculo user = new Vehiculo();
		user.setEmail("admin@gmail.com");
		user.setFirstName("admin");
		user.setLastName("admin");
		user.setCreatedBy("admin");
		user.setUpdatedBy("admin");

		ResponseEntity<Vehiculo> postResponse = restTemplate.postForEntity(getRootUrl() + "/users", user, Vehiculo.class);
		Assert.assertNotNull(postResponse);
		Assert.assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdatePost() {
		int id = 1;
		Vehiculo user = restTemplate.getForObject(getRootUrl() + "/users/" + id, Vehiculo.class);
		user.setFirstName("admin1");
		user.setLastName("admin2");

		restTemplate.put(getRootUrl() + "/users/" + id, user);

		Vehiculo updatedVehiculo = restTemplate.getForObject(getRootUrl() + "/users/" + id, Vehiculo.class);
		Assert.assertNotNull(updatedVehiculo);
	}

	@Test
	public void testDeletePost() {
		int id = 2;
		Vehiculo user = restTemplate.getForObject(getRootUrl() + "/users/" + id, Vehiculo.class);
		Assert.assertNotNull(user);

		restTemplate.delete(getRootUrl() + "/users/" + id);

		try {
			user = restTemplate.getForObject(getRootUrl() + "/users/" + id, Vehiculo.class);
		} catch (final HttpClientErrorException e) {
			Assert.assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

}
