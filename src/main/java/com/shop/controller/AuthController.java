package com.shop.controller;

import com.shop.model.User;
// import com.shop.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
public class AuthController {
    
    // @Autowired
    // private JwtUtil jwtUtil;
    
    @GetMapping("/google")
    public ResponseEntity<Map<String, String>> googleAuth() {
        // This endpoint will redirect to Google OAuth
        Map<String, String> response = new HashMap<>();
        response.put("message", "Redirecting to Google OAuth");
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/google/callback")
    public ResponseEntity<Map<String, Object>> googleCallback(@AuthenticationPrincipal OAuth2User oauth2User) {
        try {
            if (oauth2User == null) {
                Map<String, Object> error = new HashMap<>();
                error.put("error", "Authentication failed");
                return ResponseEntity.badRequest().body(error);
            }
            
            // Extract user information from OAuth2User
            String email = oauth2User.getAttribute("email");
            String name = oauth2User.getAttribute("name");
            String googleId = oauth2User.getName(); // This is the Google ID
            
            // Create or update user (you can add user service here)
            User user = new User(email, name, googleId);
            
            // Generate JWT token
            // String token = jwtUtil.generateToken(email);
            
            Map<String, Object> response = new HashMap<>();
            // response.put("token", token);
            response.put("user", Map.of(
                "email", email,
                "name", name,
                "googleId", googleId
            ));
            response.put("message", "Login successful");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Authentication failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
    
    @GetMapping("/user")
    public ResponseEntity<Map<String, Object>> getUserInfo(@RequestHeader("Authorization") String token) {
        try {
            // Remove "Bearer " prefix
            String jwtToken = token.replace("Bearer ", "");
            
            // if (!jwtUtil.validateToken(jwtToken)) {
            //     Map<String, Object> error = new HashMap<>();
            //     error.put("error", "Invalid token");
            //     return ResponseEntity.badRequest().body(error);
            // }
            
            // String email = jwtUtil.getEmailFromToken(jwtToken);
            
            Map<String, Object> response = new HashMap<>();
            // response.put("email", email);
            response.put("message", "Token valid");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Token validation failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
} 