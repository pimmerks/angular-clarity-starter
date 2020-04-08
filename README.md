# Clarity Bootstrap
Project created with command: `ng new clarity-bootstrap --style scss --routing`

# Using the cli
#### Creating a lazy loaded module 'page'
`ng g module pages/<name> --route <route> --module app --routing`
After this I usually remove the extra component that has been created.  
Also create a new directory in the `pages/<name>` folder called `components` where you put all components in.

#### Creating a components for a page
`ng g c pages/<page/module name>/components/<componentName>`

# Folder structure
### App
```
|-- app
    |-- [+] helpers  // Like guards and operators (for rxjs)
    |-- [+] models   // Interfaces and classes
    |-- [+] pages    // Lazy loaded modules
    |-- [+] services // Global services
    |-- [+] shared   // Module that contains components, directives, pipes shared across the whole app
```

### Pages
```
|-- pages
    |-- home
        |-- [+] components
        |-- home-routing.module.ts
        |-- home.module.ts
    |-- settings
        |-- [+] components
        |-- settings-routing.module.ts
        |-- settings.module.ts
```

### Helpers
```
|-- helpers
    |-- [+] guards
    |-- [+] operators
```
### Shared
```
|-- shared
    |-- [+] components // Components to be reused in the app
    |-- [+] directives
    |-- [+] pipes
    |-- shared.module.ts
```