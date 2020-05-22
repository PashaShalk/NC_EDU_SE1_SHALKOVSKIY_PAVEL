package com.netcracker.backend.controller;

import com.netcracker.backend.model.Report;
import com.netcracker.backend.services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/post/{ID}")
    public void sendReport(@RequestBody String reason,
                           @PathVariable Long ID) {
        reportService.sendReport(ID, reason);
    }

    @GetMapping("/page/{page}/count/{count}")
    public List<Report> getAllUsers(@PathVariable Integer page,
                                    @PathVariable Integer count) {
        return reportService.getAllReports(page, count);
    }

    @GetMapping("/count")
    public Long getCountAllUsers() {
        return reportService.getCountAllReports();
    }

    @GetMapping("/checking/{ID}")
    public void blockUser(@PathVariable Long ID) {
        reportService.markAsChecked(ID);
    }

    @GetMapping("/unchecking/{ID}")
    public void unblockUser(@PathVariable Long ID) {
        reportService.markAsUnchecked(ID);
    }
}
