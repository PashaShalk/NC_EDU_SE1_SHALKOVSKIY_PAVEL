package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.*;
import com.netcracker.fapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    public final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/authorization")
    public AuthorizedUser authenticate(@RequestBody LoginData loginData) {
        return userService.getUserByLoginData(loginData);
    }

    @PostMapping("/registration")
    public boolean register(@RequestBody RegisteredUser registeredUser) {
        return userService.registerUser(registeredUser);
    }

    @GetMapping("/id/{ID}")
    public UserVM getUserByID(@PathVariable Long ID) {
        return userService.getUserByID(ID);
    }

    @GetMapping("/nickname/{nickname}")
    public UserVM getUserByNickname(@PathVariable String nickname) {
        return userService.getUserByNickname(nickname);
    }

    @GetMapping("/page/{page}/count/{count}")
    public List<UserVM> getAllUsers(@PathVariable Long page, @PathVariable Long count) {
        return userService.getAllUsers(page, count);
    }

    @GetMapping("/count")
    public Long getCountAllUsers() {
        return userService.getCountAllUsers();
    }

    @GetMapping("/blocking/{ID}")
    public void blockUser(@PathVariable Long ID) {
        userService.blockUser(ID);
    }

    @GetMapping("/unblocking/{ID}")
    public void unblockUser(@PathVariable Long ID) {
        userService.unblockUser(ID);
    }

    @PostMapping("/newavatar/{ID}")
    public HttpStatus uploadAvatar(@RequestParam("file") MultipartFile avatar,
                                   @PathVariable Long ID) throws IOException {
        userService.setAvatar(ID, avatar);
        return HttpStatus.OK;
    }

    @GetMapping("/avatar/{ID}")
    public ResponseEntity<byte[]> getAvatar(@PathVariable Long ID) throws IOException {
        return userService.getAvatar(ID);
    }

    @PostMapping("/updating/{ID}")
    public UserVM updateInfo(@RequestBody UserInfo userInfo,
                             @PathVariable Long ID) {
        return userService.updateInfo(userInfo, ID);
    }
}
