| Method                                    | Description                                                     |
| ----------------------------------------- | --------------------------------------------------------------- |
| [`isValid()`](#isValid)                   | Checks if the package object is still valid.                    |
| [`getAddress()`](#getAddress)             | Gets the package's address.                                     |
| [`setAddress(address)`](#setAddress)      | Sets the package's address.                                     |
| [`list()`](#list)                         | Lists all items in the package.                                 |
| [`getItemDetail(slot)`](#getItemDetail)   | Gets detailed information for a specific item slot.             |
| [`getOrderData()`](#getOrderData)         | Gets the [`PackageOrder`](./package-order.md) context.          |

---

### `isValid()` {#isValid}

Checks if the package object is still valid. A package is no longer valid once it leaves the packager.

**Returns**

- `boolean` `true` if the package object is valid, `false` otherwise.

---

### `getAddress()` {#getAddress}

Gets the address string written on the package.

**Returns**

- `string` The address of the package, or `nil` if no address is set.

**Throws**

- If the package object is no longer valid.

---

### `setAddress(address)` {#setAddress}

Sets or clears the address of the package.

**Parameters**

- `address`: `string` The address to set. Providing an empty string clears the address.

**Throws**

- If the package object is no longer valid.

---

### `list()` {#list}

Lists basic information about all available item stacks in the package.

**Returns**

- `table` with basic item information like:
```lua
{
  { name = "minecraft:apple", count = 64 },
  { name = "minecraft:stick", count = 128 }
}
```

**Throws**

- If the package object is no longer valid.

---

### `getItemDetail(slot)` {#getItemDetail}

Gets detailed information for a specific item stack in the connected inventory. Slot is the index of the item in `list()`.

**Parameters**

- `slot`: `number` The slot number of the item stack.

**Returns**

- `table` A table with detailed item information, or `nil` if the slot has no items.
```lua
{
  name = "minecraft:enchanted_book",
  displayName = "Enchanted Book",
  count = 1,
  maxCount = 1,
  enchantments = {
    { level = 5, name = "minecraft:sharpness", displayName = "Sharpness V" }
  }
  -- ... other details
}
```

**Throws**

- If the package object is no longer valid
- If the `slot` number is not between 1 and 9.

---

### `getOrderData()` {#getOrderData}

If this package is ordered from a Stock Link then it will return the [`PackageOrder`](./package-order.md) context. This contains data used for getting the requirements of the order and data of the package in relation to the other packages in the order.

**Returns**

- `PackageOrder` A PackageOrder object, or `nil` if this package has no associated order data.

**Throws**

- If the package object is no longer valid.