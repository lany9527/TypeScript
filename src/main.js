function MyComonent() {
    var _this = this;
    this.age = 42;
    setTimeout(function () {
        _this.age += 1;
        console.log(_this.age);
    }, 100);
}
new MyComonent();
//# sourceMappingURL=main.js.map