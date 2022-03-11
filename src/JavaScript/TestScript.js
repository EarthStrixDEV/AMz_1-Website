class TestScript
{
    constructor (name ,age ,hobbie)
    {
        this.name = name;
        this.age = age;
        this.hobbie = hobbie;
    }
    show()
    {
        let Show = `${ this.name } ,${ this.age } ,${ this.hobbie }`;
        return Show;
    }
}

let obj = new TestScript("EarthStrix" ,19 ,"Programming");
console.log(obj.show());