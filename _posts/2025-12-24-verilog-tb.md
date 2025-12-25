---
title: "Verilog TestBench"
date: 2025-12-24
section: "lessons"
categories: ["Verilog"]
description: ""
reading_time: 5
---

# About TestBench and some considerations

- .vh 파일을 사용하면 verilog header 파일로 clk cycle이나, array size 등 전역에서 필요한 정보를 선언한다. include로 사용하고 한 번만 선언되도록 한다.
- TB에서 @posedge(clk) 가져가면서 = 으로 assign하면 그게 top dut module과 race condition을 만들 수 있으니 꼭 clk에 sync할거면 non-blocking을 사용하도록 한다.
- //region //end region 을 활용해서 너무 긴 line의 wire declaration을 주석처리할 수 있다.