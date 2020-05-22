package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.SubscriptionsData;
import com.netcracker.fapi.services.SubscriptionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/subscriptions")
public class SubscriptionsController {

    private final SubscriptionsService subscriptionsService;

    @Autowired
    public SubscriptionsController(SubscriptionsService subscriptionsService) {
        this.subscriptionsService = subscriptionsService;
    }

    @GetMapping("/user/{userID}/authorizeduser/{authorizedUserID}")
    public ResponseEntity<SubscriptionsData> getSubscriptionsData(@PathVariable Long userID,
                                                                  @PathVariable Long authorizedUserID) {
        return subscriptionsService.getSubscriptionsData(userID, authorizedUserID);
    }

    @GetMapping("/subscribing/user/{userID}/authorizeduser/{authorizedUserID}")
    public ResponseEntity<SubscriptionsData> subscribe(@PathVariable Long userID,
                                                       @PathVariable Long authorizedUserID) {
        return subscriptionsService.subscribe(userID, authorizedUserID);
    }

    @DeleteMapping("/unsubscribing/user/{userID}/authorizeduser/{authorizedUserID}")
    public ResponseEntity<SubscriptionsData> unsubscribe(@PathVariable Long userID,
                                                         @PathVariable Long authorizedUserID) {
        return subscriptionsService.unsubscribe(userID, authorizedUserID);
    }
}
