| Method                                  | Description                                           |
| --------------------------------------- | ----------------------------------------------------- |
| [`makePackage()`](#makePackage)         | Makes a package.                                    |
| [`list()`](#list)                       | Lists all items in the connected inventory.         |
| [`getItemDetail(slot)`](#getItemDetail) | Gets detailed information for a specific item slot. |
| [`getAddress()`](#getAddress)           | Gets the packager's currently configured address.   |
| [`setAddress([address])`](#setAddress)  | Sets the packager's address.                        |
| [`getPackage()`](#getPackage)           | Gets the package currently held by the packager.    |

---

### `makePackage()` {#makePackage}

Activates the packager. If no package is currently held, it attempts to create a new one.
It returns `false` if a package was already held before activation or if no package could be created (e.g., insufficient items or no recipe match). Otherwise, it returns `true` if a new package was successfully created and is now held.

**Returns**

- `boolean` `true` if a new package was successfully made, `false` otherwise.

---

### `list()` {#list}

Lists basic information about all available item stacks in the inventory connected to the packager.

**Returns**

- `table` with basic item information.
Example:
```lua
{
  { name = "minecraft:apple", count = 64 },
  { name = "minecraft:stick", count = 128 }
}
```

---

### `getItemDetail(slot)` {#getItemDetail}

Gets detailed information for a specific item stack in the connected inventory. Slot is the index of the item in `list()`.

**Parameters**

- `slot`: `number` The slot number of the item stack.

**Returns**

- `table` A table with detailed item information, or `nil` if the slot has no items.
Example:
```lua
{
  count = 64,
  displayName = "Apple",
  itemGroups = {},
  maxCount = 64,
  name = "minecraft:apple",
  tags = {}
  -- ... other details
}
```

**Throws**

- If the `slot` number is less than 1.

---

### `getAddress()` {#getAddress}

Gets the Packager's address.

**Returns**

- `string` The address string.

---

### `setAddress([address])` {#setAddress}

Sets the Packager's address to the given variable until it tries to make a package with no computer attached, at which point it forgets about it and goes back to normal behavior.
If you want to programatically assign it an address every time, it's a good idea to put .setAddress in a startup.lua file, so it applies the address you want on chunkload.

If the address arg is nil, it'll go back to the default sign-based behavior again.

**Parameters**

- _address?:_ `string = nil` Force every package to be addressed to `address`. Goes back to default if address is `nil`.

---

### `getPackage()` {#getPackage}

Gets the [`Package`](./package.md) object representing the package currently held by the packager, if any.

**Returns**

- `Package` A Package object, or `nil` if no package is currently held.