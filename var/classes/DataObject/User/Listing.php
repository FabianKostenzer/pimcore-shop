<?php

namespace Pimcore\Model\DataObject\User;

use Pimcore\Model\DataObject;

/**
 * @method DataObject\User|false current()
 * @method DataObject\User[] load()
 * @method DataObject\User[] getData()
 * @method DataObject\User[] getObjects()
 */

class Listing extends DataObject\Listing\Concrete
{
protected $classId = "USER";
protected $className = "User";


/**
* Filter by username (Username)
* @param string|int|float|array|Model\Element\ElementInterface $data  comparison data, can be scalar or array (if operator is e.g. "IN (?)")
* @param string $operator  SQL comparison operator, e.g. =, <, >= etc. You can use "?" as placeholder, e.g. "IN (?)"
* @return static
*/
public function filterByUsername ($data, $operator = '=')
{
	$this->getClass()->getFieldDefinition("username")->addListingFilter($this, $data, $operator);
	return $this;
}

/**
* Filter by isAdmin (Is Admin)
* @param string|int|float|array|Model\Element\ElementInterface $data  comparison data, can be scalar or array (if operator is e.g. "IN (?)")
* @param string $operator  SQL comparison operator, e.g. =, <, >= etc. You can use "?" as placeholder, e.g. "IN (?)"
* @return static
*/
public function filterByIsAdmin ($data, $operator = '=')
{
	$this->getClass()->getFieldDefinition("isAdmin")->addListingFilter($this, $data, $operator);
	return $this;
}



}
