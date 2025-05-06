| Method                                  | Description                                                      |
| --------------------------------------- | ---------------------------------------------------------------- |
| [`getOrderID()`](#getOrderID)           | Gets the Order ID of the package.                                |
| [`getIndex()`](#getIndex)               | Gets the fragment index of the package.                          |
| [`isFinal()`](#isFinal)                 | Checks if this is the final package fragment for its index.      |
| [`getLinkIndex()`](#getLinkIndex)       | Gets the link index for linked package orders.                   |
| [`isFinalLink()`](#isFinalLink)         | Checks if this is the final package in a linked order chain.     |
| [`list()`](#list)                       | Lists all items in the package order.                            |
| [`getItemDetail(slot)`](#getItemDetail) | Gets detailed information for a specific item slot in the order. |
| [`getCrafts()`](#getCrafts)             | Lists the crafting steps required for the order.                 |

---

### `getOrderID()` {#getOrderID}

Gets the Order ID of the package. This is a unique identifier that is shared across all packages in the same order.

**Returns**

- `number` The Order ID.

**Throws**

- If the parent package object is no longer valid.

---

### `getIndex()` {#getIndex}

The Index of a package is the index of the package from the same packager. So if you order 10 swords from one packager the first package will be index 1 and the second package will be index 2.

**Returns**

- `number` The package index.

**Throws**

- If the parent package object is no longer valid.

---

### `isFinal()` {#isFinal}

Indicates if this is the final package from the same packager.

**Returns**

- `boolean` `true` if this is the final package from the packager, `false` otherwise.

**Throws**

- If the parent package object is no longer valid.

---

### `getLinkIndex()` {#getLinkIndex}

The Link Index of a package is the index of the packager in the order. This is used when multiple packages come from different packagers. So if you order 2 diamonds but each packager only has 1 diamond, the first package will be link index 1 and the second package will be link index 2.

**Returns**

- `number` The link index of the package.

**Throws**

- If the parent package object is no longer valid.

---

### `isFinalLink()` {#isFinalLink}

Indicates if this is the final package in the linked

**Returns**

- `boolean` `true` if this is the final package in a linked chain, `false` otherwise.

**Throws**

- If the parent package object is no longer valid.

---

### `list()` {#list}

Lists basic information about all items in the complete order even if they are not in the package. Is empty after re-packaging for individual crafts.

Only valid for packages with a link index of 1. If the package is not the first in a linked order, this will return `nil`.

**Returns**

- `table` with basic item information or `nil` if the package is not from the packager with an index of 1.
Example:
```lua
{
  { name = "create:precision_mechanism", count = 2 },
  { name = "create:brass_casing", count = 1 }
}
```

**Throws**

- If the parent package object is no longer valid

---

### `getItemDetail(slot)` {#getItemDetail}

Gets detailed information for a specific item stack in the order. Slot is the index of the item in `list()`.

Only valid for packages with a link index of 1. If the package is not the first in a linked order, this will return `nil`.

**Parameters**

- `slot`: `number` The slot number of the item stack.

**Returns**

- `table` A table with detailed item information, or `nil` if the slot has no items.
Example:
```lua
{
  name = "create:precision_mechanism",
  displayName = "Precision Mechanism",
  count = 2,
  maxCount = 64
  -- ... other details
}
```

**Throws**

- If the parent package object is no longer valid
- If the `slot` number is less than 1

---

### `getCrafts()` {#getCrafts}

Gets the crafting recipes associated with the order.

**Returns**

- `table` of crafting recipes
```lua
{
  {
    count = 5, -- Number of times this recipe needs to be crafted
    recipe = { -- Corresponds to crafting grid
      "minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget",
      "minecraft:iron_nugget", "create:cogwheel",       "minecraft:iron_nugget",
      "minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget"
    }
  },
  {
    count = 10,
    recipe = {
      nil, "minecraft:redstone_torch", nil, 
      nil, "minecraft:iron_ingot",     nil, 
      nil, "minecraft:glass_pane",     nil
    }
  }
}
```

**Throws**

- If the parent package object is no longer valid or if the order context is `null`.
