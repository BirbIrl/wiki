| Method                                 | Description                                        |
| -------------------------------------- | -------------------------------------------------- |
| [`makePackage()`](#makePackage)        | Makes a package.                                   |
| [`getAddress()`](#getAddress)          | Gets the Re-Packager's address.                    |
| [`setAddress([address])`](#setAddress) | Sets the Re-Packager's address.                    |
| [`getPackage()`](#getPackage)          | Gets the package currently held by the Repackager. |

---

### `makePackage()` {#makePackage}

Activates the repackager.
It returns `false` if a package is already held by the repackager *before* activation (as it expects to pick one up or be empty to receive one).
After attempting activation, it returns `true` if a package is now held (either the input was processed or a new one formed). It returns `false` if the repackager is still empty after activation.

**Returns**

- `boolean` `true` if a package is held after activation, `false` otherwise or if a package was already present initially.

---

### `getAddress()` {#getAddress}

Gets the Re-Packager's address.

**Returns**

- `string` The fallback address string.

---

### `setAddress([address])` {#setAddress}

Sets the Repackager's fallback address. This address is used if a package being processed does not have its own address.
This setting is ephemeral and resets if the computer is detached or the chunk unloads. It's recommended to set this in a `startup.lua` file for persistence.

If the address arg is nil, it'll clear the custom computer address.

**Parameters**

- _address?:_ `string = nil` The fallback address to set. Clears the custom address if `nil`.

---

### `getPackage()` {#getPackage}

Gets the [`Package`](./package.md) object representing the package currently held by the Repackager (either an input package or the result of a repackaging operation).

**Returns**

- `Package` A Package object, or `nil` if no package is currently held.