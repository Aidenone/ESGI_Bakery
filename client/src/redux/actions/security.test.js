const security = require("./security")
// @ponicode
describe("security.logUser", () => {
    test("0", () => {
        let callFunction = () => {
            security.logUser("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            security.logUser(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("security.login", () => {
    test("0", () => {
        let callFunction = () => {
            security.login("user123", "NoWiFi4you", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            security.login("user123", "!Lov3MyPianoPony", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            security.login("user123", "accessdenied4u", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            security.login(123, "!Lov3MyPianoPony", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            security.login("user_name", "!Lov3MyPianoPony", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            security.login(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("security.register", () => {
    test("0", () => {
        let callFunction = () => {
            security.register("user_name", "accessdenied4u", "user@host:300", "2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            security.register("user_name", "accessdenied4u", "email@Google.com", "01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            security.register("user-name", "accessdenied4u", "something.example.com", "01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            security.register("user name", "accessdenied4u", "something.example.com", "2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            security.register("user-name", "$p3onyycat", "TestUpperCase@Example.com", "Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            security.register(undefined, undefined, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
