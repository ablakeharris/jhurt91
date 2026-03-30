'use client';

import {
  Box,
  Field,
  Flex,
  Heading,
  Input,
  RadioGroup,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Navigation } from '@/src/components/Navigation';
import { Footer } from '@/src/components/Footer';
import { Container } from '@/src/elements/Container';
import { PrimaryButton } from '@/src/elements/PrimaryButton';

export default function VolunteerPage() {
  const [location, setLocation] = useState('district91');
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    zipCode: false,
    email: false,
    emailFormat: false,
    phone: false,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '');
    const phone = String(data.get('phone') ?? '');
    const newErrors = {
      firstName: !data.get('firstName'),
      lastName: !data.get('lastName'),
      zipCode: !data.get('zipCode'),
      email: !email,
      emailFormat: !!email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      phone: !!phone && !/^\+?[\d\s\-().]{7,15}$/.test(phone),
    };
    if (Object.values(newErrors).some(Boolean)) {
      e.preventDefault();
      setErrors(newErrors);
    }
  }

  return (
    <Box minH="screen">
      <Navigation />
      <Box pt={28} pb={20} px={4}>
        <Container width="narrow">
          <Heading as="h1" size="xl" mb={8} lineHeight="shorter">
            THANK YOU for helping us build a movement that will reach every
            corner of Indiana!
          </Heading>

          <form
            action="https://formspree.io/f/xdapgnny"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <VStack gap={6} align="stretch">
              {/* Contact Information */}
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="wider"
                  mb={4}
                >
                  CONTACT INFORMATION
                </Text>
                <VStack gap={4} align="stretch">
                  <Flex gap={4} direction={{ base: 'column', sm: 'row' }}>
                    <Field.Root flex={1} invalid={errors.firstName}>
                      <Field.Label fontWeight="bold" fontSize="sm">
                        First Name
                      </Field.Label>
                      <Input name="firstName" />
                      <Field.ErrorText>First name is required.</Field.ErrorText>
                    </Field.Root>
                    <Field.Root flex={1} invalid={errors.lastName}>
                      <Field.Label fontWeight="bold" fontSize="sm">
                        Last Name
                      </Field.Label>
                      <Input name="lastName" />
                      <Field.ErrorText>Last name is required.</Field.ErrorText>
                    </Field.Root>
                  </Flex>

                  <Field.Root invalid={errors.zipCode}>
                    <Field.Label fontWeight="bold" fontSize="sm">
                      Zip Code
                    </Field.Label>
                    <Input name="zipCode" />
                    <Field.ErrorText>Zip code is required.</Field.ErrorText>
                  </Field.Root>

                  <Flex gap={4} direction={{ base: 'column', sm: 'row' }}>
                    <Field.Root
                      flex={1}
                      invalid={errors.email || errors.emailFormat}
                    >
                      <Field.Label fontWeight="bold" fontSize="sm">
                        Email
                      </Field.Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="email@email.com"
                      />
                      <Field.ErrorText>
                        {errors.email
                          ? 'Email is required.'
                          : 'Please enter a valid email address.'}
                      </Field.ErrorText>
                    </Field.Root>
                    <Field.Root flex={1} invalid={errors.phone}>
                      <Field.Label fontWeight="bold" fontSize="sm">
                        Phone{' '}
                        <Text as="span" fontWeight="normal" color="gray.500">
                          (Optional)
                        </Text>
                      </Field.Label>
                      <Input name="phone" type="tel" />
                      <Field.ErrorText>
                        Please enter a valid phone number.
                      </Field.ErrorText>
                    </Field.Root>
                  </Flex>
                </VStack>
              </Box>

              {/* Additional Information */}
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="wider"
                  mb={4}
                >
                  ADDITIONAL INFORMATION
                </Text>
                <VStack gap={4} align="stretch">
                  <Box>
                    <Text fontWeight="bold" fontSize="sm" mb={2}>
                      I live in:
                    </Text>
                    <RadioGroup.Root
                      name="location"
                      value={location}
                      onValueChange={(e) => setLocation(e.value!)}
                    >
                      <VStack align="start" gap={2}>
                        <RadioGroup.Item value="district91">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>
                            Indiana District 91
                          </RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="indiana">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Indiana</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="not-indiana">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>
                            Not in Indiana
                          </RadioGroup.ItemText>
                        </RadioGroup.Item>
                      </VStack>
                    </RadioGroup.Root>
                  </Box>

                  <Field.Root>
                    <Field.Label fontWeight="bold" fontSize="sm">
                      Current Profession?{' '}
                      <Text as="span" fontWeight="normal" color="gray.500">
                        (Optional)
                      </Text>
                    </Field.Label>
                    <Textarea name="profession" rows={2} />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label fontWeight="bold" fontSize="sm">
                      Anything else we should know about you (affiliations,
                      skill sets, etc)?{' '}
                      <Text as="span" fontWeight="normal" color="gray.500">
                        (Optional)
                      </Text>
                    </Field.Label>
                    <Textarea name="additionalInfo" rows={2} />
                  </Field.Root>
                </VStack>
              </Box>

              <Box>
                <PrimaryButton type="submit" size="lg">
                  SUBMIT
                </PrimaryButton>
              </Box>
            </VStack>
          </form>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
