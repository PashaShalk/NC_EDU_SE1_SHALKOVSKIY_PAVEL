package com.netcracker.backend.controller;

import com.netcracker.backend.model.SubscriptionsData;
import com.netcracker.backend.services.SubscriptionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/subscriptions")
public class SubscriptionsController {

    private final SubscriptionsService subscriptionsService;

    @Autowired
    public SubscriptionsController(SubscriptionsService subscriptionsService) {
        this.subscriptionsService = subscriptionsService;
    }

    @GetMapping("/user/{userID}/authorizeduser/{authorizedUserID}")
    public SubscriptionsData getSubscriptionsData(@PathVariable Long userID,
                                                  @PathVariable Long authorizedUserID) {
        return subscriptionsService.getSubscriptionsData(userID, authorizedUserID);
    }

    @GetMapping("/subscribing/user/{userID}/authorizeduser/{authorizedUserID}")
    public SubscriptionsData subscribe(@PathVariable Long userID,
                                       @PathVariable Long authorizedUserID) {
        return subscriptionsService.subscribe(userID, authorizedUserID);
    }

    @GetMapping("/unsubscribing/user/{userID}/authorizeduser/{authorizedUserID}")
    public SubscriptionsData unsubscribe(@PathVariable Long userID,
                                         @PathVariable Long authorizedUserID) {
        return subscriptionsService.unsubscribe(userID, authorizedUserID);
    }
}
