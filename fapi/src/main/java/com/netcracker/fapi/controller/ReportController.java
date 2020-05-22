package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.ReportVM;
import com.netcracker.fapi.services.ReportService;
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
    public List<ReportVM> getAllUsers(@PathVariable Long page,
                                      @PathVariable Long count) {
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
