<?php

/**
 * Inheritance: no
 * Variants: no
 *
 * Fields Summary:
 * - name [input]
 * - description [textarea]
 * - price [numeric]
 * - isFeatured [checkbox]
 * - image [image]
 * - imageText [input]
 */

namespace Pimcore\Model\DataObject;

use Pimcore\Model\DataObject\Exception\InheritanceParentNotFoundException;
use Pimcore\Model\DataObject\PreGetValueHookInterface;

/**
* @method static \Pimcore\Model\DataObject\Car\Listing getList(array $config = [])
* @method static \Pimcore\Model\DataObject\Car\Listing|\Pimcore\Model\DataObject\Car|null getByName($value, $limit = 0, $offset = 0, $objectTypes = null)
* @method static \Pimcore\Model\DataObject\Car\Listing|\Pimcore\Model\DataObject\Car|null getByDescription($value, $limit = 0, $offset = 0, $objectTypes = null)
* @method static \Pimcore\Model\DataObject\Car\Listing|\Pimcore\Model\DataObject\Car|null getByPrice($value, $limit = 0, $offset = 0, $objectTypes = null)
* @method static \Pimcore\Model\DataObject\Car\Listing|\Pimcore\Model\DataObject\Car|null getByIsFeatured($value, $limit = 0, $offset = 0, $objectTypes = null)
* @method static \Pimcore\Model\DataObject\Car\Listing|\Pimcore\Model\DataObject\Car|null getByImage($value, $limit = 0, $offset = 0, $objectTypes = null)
* @method static \Pimcore\Model\DataObject\Car\Listing|\Pimcore\Model\DataObject\Car|null getByImageText($value, $limit = 0, $offset = 0, $objectTypes = null)
*/

class Car extends Concrete
{
protected $o_classId = "CAR";
protected $o_className = "Car";
protected $name;
protected $description;
protected $price;
protected $isFeatured;
protected $image;
protected $imageText;


/**
* @param array $values
* @return \Pimcore\Model\DataObject\Car
*/
public static function create($values = array()) {
	$object = new static();
	$object->setValues($values);
	return $object;
}

/**
* Get name - Name
* @return string|null
*/
public function getName(): ?string
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("name");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->name;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set name - Name
* @param string|null $name
* @return \Pimcore\Model\DataObject\Car
*/
public function setName(?string $name)
{
	$this->name = $name;

	return $this;
}

/**
* Get description - Beschreibung
* @return string|null
*/
public function getDescription(): ?string
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("description");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->description;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set description - Beschreibung
* @param string|null $description
* @return \Pimcore\Model\DataObject\Car
*/
public function setDescription(?string $description)
{
	$this->description = $description;

	return $this;
}

/**
* Get price - Preis
* @return float|null
*/
public function getPrice(): ?float
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("price");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->price;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set price - Preis
* @param float|null $price
* @return \Pimcore\Model\DataObject\Car
*/
public function setPrice(?float $price)
{
	/** @var \Pimcore\Model\DataObject\ClassDefinition\Data\Numeric $fd */
	$fd = $this->getClass()->getFieldDefinition("price");
	$this->price = $fd->preSetData($this, $price);
	return $this;
}

/**
* Get isFeatured - Wird gefeatured
* @return bool|null
*/
public function getIsFeatured(): ?bool
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("isFeatured");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->isFeatured;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set isFeatured - Wird gefeatured
* @param bool|null $isFeatured
* @return \Pimcore\Model\DataObject\Car
*/
public function setIsFeatured(?bool $isFeatured)
{
	$this->isFeatured = $isFeatured;

	return $this;
}

/**
* Get image - Bild
* @return \Pimcore\Model\Asset\Image|null
*/
public function getImage(): ?\Pimcore\Model\Asset\Image
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("image");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->image;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set image - Bild
* @param \Pimcore\Model\Asset\Image|null $image
* @return \Pimcore\Model\DataObject\Car
*/
public function setImage(?\Pimcore\Model\Asset\Image $image)
{
	$this->image = $image;

	return $this;
}

/**
* Get imageText - Bildunterschrift
* @return string|null
*/
public function getImageText(): ?string
{
	if ($this instanceof PreGetValueHookInterface && !\Pimcore::inAdmin()) {
		$preValue = $this->preGetValue("imageText");
		if ($preValue !== null) {
			return $preValue;
		}
	}

	$data = $this->imageText;

	if ($data instanceof \Pimcore\Model\DataObject\Data\EncryptedField) {
		return $data->getPlain();
	}

	return $data;
}

/**
* Set imageText - Bildunterschrift
* @param string|null $imageText
* @return \Pimcore\Model\DataObject\Car
*/
public function setImageText(?string $imageText)
{
	$this->imageText = $imageText;

	return $this;
}

}

