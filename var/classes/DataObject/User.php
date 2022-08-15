<?php

/**
 * Inheritance: no
 * Variants: no
 *
 * Fields Summary:
 * - username [input]
 * - password [password]
 * - isAdmin [checkbox]
 */

namespace Pimcore\Model\DataObject;

use Pimcore\Model\DataObject\Exception\InheritanceParentNotFoundException;
use Pimcore\Model\DataObject\PreGetValueHookInterface;

/**
* @method static \Pimcore\Model\DataObject\User\Listing getList(array $config = [])
* @method static \Pimcore\Model\DataObject\User\Listing|\Pimcore\Model\DataObject\User|null getByUsername($value, $limit = 0, $offset = 0, $objectTypes = null)
* @method static \Pimcore\Model\DataObject\User\Listing|\Pimcore\Model\DataObject\User|null getByIsAdmin($value, $limit = 0, $offset = 0, $objectTypes = null)
*/

class User extends Concrete
{
protected $o_classId = "USER";
protected $o_className = "User";
protected $username;
protected $password;
protected $isAdmin;


/**
* @param array $values
* @return \Pimcore\Model\DataObject\User
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get username - Username
* @return string|null
*/
public function getUsername(): ?string
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("username");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->username;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set username - Username
* @param string|null $username
* @return \Pimcore\Model\DataObject\User
*/
public function setUsername(?string $username)
{
	$this->username = $username;

	return $this;
}

/**
* Get password - Passwort
* @return string|null
*/
public function getPassword(): ?string
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("password");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->password;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set password - Passwort
* @param string|null $password
* @return \Pimcore\Model\DataObject\User
*/
public function setPassword(?string $password)
{
	$this->password = $password;

	return $this;
}

/**
* Get isAdmin - Is Admin
* @return bool|null
*/
public function getIsAdmin(): ?bool
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("isAdmin");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->isAdmin;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set isAdmin - Is Admin
* @param bool|null $isAdmin
* @return \Pimcore\Model\DataObject\User
*/
public function setIsAdmin(?bool $isAdmin)
{
	$this->isAdmin = $isAdmin;

	return $this;
}

}

