package com.rvz.BackEndJava;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.rvz.BackEndJavaApplication;




@SpringBootTest
class BackEndJavaApplicationTests {
	@Test
	void contextLoads() {
		  BackEndJavaApplication myClass = new BackEndJavaApplication();
		  assertNull(myClass.doSomething());
		  assertThat(myClass.doSomething()).isNull();
	}

}
