package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.ReportVM;
import com.netcracker.fapi.services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/reports")
public class ReportController {

    private final ReportService reportService;

    @Autowired
    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/post/{ID}")
    public void sendReport(@RequestBody String reason,
                           @PathVariable Long ID) {
        reportService.sendReport(ID, reason);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/page/{page}/count/{count}")
    public List<ReportVM> getAllUsers(@PathVariable Long page,
                                      @PathVariable Long count) {
        return reportService.getAllReports(page, count);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/count")
    public Long getCountAllUsers() {
        return reportService.getCountAllReports();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/checking/{ID}")
    public void blockUser(@PathVariable Long ID) {
        reportService.markAsChecked(ID);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/unchecking/{ID}")
    public void unblockUser(@PathVariable Long ID) {
        reportService.markAsUnchecked(ID);
    }
}
